import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { diagnosisQuestions } from "../data/diagnosisQuestions";
import type { AnswerValue, DiagnosisAnswers } from "../types/diagnosis";
import { ANSWER_OPTIONS } from "../types/diagnosis";
import type { PersonaResult } from "../types/persona";
import { runDiagnosis } from "../utils/diagnosis";
import {
  loadFromStorage,
  removeFromStorage,
  saveToStorage,
  STORAGE_KEYS,
} from "../utils/storage";

const QUESTIONS_PER_PAGE = 5;
const PAGE_LABELS = [
  "Core Layer 解析中",
  "Social Layer 解析中",
  "Emotion Layer 解析中",
  "Action Layer 解析中",
  "Role Layer 解析中",
  "Dark Layer 解析中",
];

export function DiagnosisQuestionsPage() {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<DiagnosisAnswers>>(
    () =>
      loadFromStorage<Partial<DiagnosisAnswers>>(STORAGE_KEYS.draftAnswers) ??
      {},
  );

  const pageCount = Math.ceil(diagnosisQuestions.length / QUESTIONS_PER_PAGE);
  const currentQuestions = useMemo(() => {
    const start = pageIndex * QUESTIONS_PER_PAGE;
    return diagnosisQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [pageIndex]);
  const answeredCount = diagnosisQuestions.filter(
    (question) => answers[question.id] !== undefined,
  ).length;
  const progressPercentage = Math.round(
    (answeredCount / diagnosisQuestions.length) * 100,
  );
  const currentPageComplete = currentQuestions.every(
    (question) => answers[question.id] !== undefined,
  );
  const allQuestionsComplete = diagnosisQuestions.every(
    (question) => answers[question.id] !== undefined,
  );
  const isLastPage = pageIndex === pageCount - 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageIndex]);

  function handleAnswer(questionId: string, value: AnswerValue) {
    setAnswers((currentAnswers) => {
      const nextAnswers = { ...currentAnswers, [questionId]: value };
      saveToStorage(STORAGE_KEYS.draftAnswers, nextAnswers);
      return nextAnswers;
    });
  }

  function handleNext() {
    if (!currentPageComplete) {
      return;
    }

    setPageIndex((currentPageIndex) =>
      Math.min(currentPageIndex + 1, pageCount - 1),
    );
  }

  function handlePrevious() {
    setPageIndex((currentPageIndex) => Math.max(currentPageIndex - 1, 0));
  }

  function handleSubmit() {
    if (!currentPageComplete || !allQuestionsComplete) {
      return;
    }

    const result = runDiagnosis(diagnosisQuestions, answers as DiagnosisAnswers);
    const savedResults =
      loadFromStorage<PersonaResult[]>(STORAGE_KEYS.savedResults) ?? [];
    const nextSavedResults = [
      result,
      ...savedResults.filter((savedResult) => savedResult.id !== result.id),
    ];

    saveToStorage(STORAGE_KEYS.latestResult, result);
    saveToStorage(STORAGE_KEYS.savedResults, nextSavedResults);
    removeFromStorage(STORAGE_KEYS.draftAnswers);
    navigate("/result", { state: { result } });
  }

  return (
    <div className="page-stack">
      <section className="progress-card" aria-label="診断の進捗">
        <div className="progress-card__meta">
          <span>
            {answeredCount} / {diagnosisQuestions.length}
          </span>
          <span>
            Layer {pageIndex + 1} / {pageCount}
          </span>
        </div>
        <div className="progress-card__bar" aria-hidden="true">
          <span style={{ width: `${progressPercentage}%` }} />
        </div>
        <p>{PAGE_LABELS[pageIndex]}</p>
      </section>

      <section className="question-list" aria-label="診断質問">
        {currentQuestions.map((question, questionIndex) => (
          <fieldset className="question-card" key={question.id}>
            <legend>
              <span className="question-number">
                Q{pageIndex * QUESTIONS_PER_PAGE + questionIndex + 1}
              </span>
              <span className="question-text">{question.text}</span>
            </legend>
            <div className="answer-options">
              {ANSWER_OPTIONS.map((option) => {
                const selected = answers[question.id] === option.value;

                return (
                  <button
                    aria-pressed={selected}
                    className={[
                      "answer-option",
                      selected ? "answer-option--selected" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={option.key}
                    onClick={() => handleAnswer(question.id, option.value)}
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </section>

      {!currentPageComplete ? (
        <p className="form-error">
          未回答の質問があります。すべて回答してから進んでください。
        </p>
      ) : null}

      <div className="diagnosis-actions">
        <Button
          disabled={pageIndex === 0}
          fullWidth
          onClick={handlePrevious}
          variant="ghost"
        >
          前へ
        </Button>
        {isLastPage ? (
          <Button
            disabled={!currentPageComplete || !allQuestionsComplete}
            fullWidth
            onClick={handleSubmit}
          >
            結果を見る
          </Button>
        ) : (
          <Button disabled={!currentPageComplete} fullWidth onClick={handleNext}>
            次へ
          </Button>
        )}
      </div>
    </div>
  );
}
