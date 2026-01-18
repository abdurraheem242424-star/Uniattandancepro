
import { GoogleGenAI } from "@google/genai";
import { Student, AttendanceRecord, Subject } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const aiService = {
  getDashboardInsights: async (students: Student[], attendance: AttendanceRecord[], subjects: Subject[]) => {
    const prompt = `
      As an AI University Assistant, analyze this attendance data for the class "BSC (hons) Agriculture 301":
      Total Students: ${students.length}
      Total Attendance Logs: ${attendance.length}
      Subjects: ${subjects.map(s => s.name).join(', ')}

      Analyze recent patterns and provide 3 short, actionable bullet points for the teacher. 
      Focus on identifying students who might need attention or subjects with low engagement.
      Keep the tone professional, encouraging, and concise.
      Format the response as plain text with bullet points starting with "•".
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      return response.text || "No insights available at this time.";
    } catch (error) {
      console.error("AI Error:", error);
      return "Unable to load AI insights. Check your connection.";
    }
  },

  generateMonthlyReport: async (subjectStats: any[], lowAttendance: any[]) => {
    const prompt = `
      Generate a professional, formal monthly attendance summary report for the University Administration.
      Class: BSC (hons) Agriculture 301
      
      Subject Data: ${JSON.stringify(subjectStats)}
      Critical Students (Below 75%): ${JSON.stringify(lowAttendance)}
      
      Format the report with:
      1. Executive Summary
      2. Key Performance Indicators (Subject-wise)
      3. Action items for short-attendance students.
      
      Tone: Formal, authoritative, and professional. Use markdown formatting.
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      return response.text || "Report generation failed.";
    } catch (error) {
      return "Error generating AI report. Please try again later.";
    }
  },

  getDetailedAnalysis: async (student: Student, records: AttendanceRecord[], subjectName: string) => {
    const prompt = `
      Analyze the attendance for student ${student.name} (Roll: ${student.rollNumber}) in the subject ${subjectName}.
      Records provided: ${JSON.stringify(records.map(r => ({ date: r.date, status: r.status })))}
      
      Provide a 2-sentence professional assessment of their consistency and one recommendation for improvement.
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      return response.text || "Analysis unavailable.";
    } catch (error) {
      return "Analysis failed to load.";
    }
  }
};
