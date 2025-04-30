"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";

const FormBuilder = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    questions: [
      {
        id: +uuidv4(),
        text: "",
      },
    ],
  });

  const addQuestion = () => {
    setForm((prev: any) => ({
      ...prev,
      questions: [...prev.questions, { id: uuidv4(), text: "" }],
    }));
  };

  const handleQuestionChange = (index: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      questions: prev.questions.map((question, i) =>
        i === index ? { ...question, text: value } : question
      ),
    }));
  };

  const removeQuestion = (index: number) => {
    if (form.questions.length > 1) {
      setForm((prev) => ({
        ...prev,
        questions: prev.questions.filter((_, i) => i !== index),
      }));
    } else {
      // toast.error("Form must have at least one question");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter form title"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter form description"
            className="mt-1"
          />
        </div>
      </div>
      <div className="spave-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Questions</h3>
          <Button variant={"outline"} type="button" onClick={addQuestion}>
            Add Question
          </Button>
        </div>
        {form.questions.map((question, index) => (
          <div key={question.id} className="space-y-2 p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <Label htmlFor={`Question-${index}`}>Question {index + 1}</Label>
              <Button
                variant="ghost"
                type="button"
                size="sm"
                className="text-red-500 hover:text-red-700"
                onClick={() => removeQuestion(index)}
              >
                remove
              </Button>
            </div>
            <Textarea
              id={`Question-${index}`}
              value={question.text}
              onChange={(e) => {
                handleQuestionChange(index, e.target.value);
              }}
              placeholder="Enter your question"
              className="mt-1"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <Button variant={"outline"} onClick={() => {}}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default FormBuilder;
