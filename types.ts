
export type AttendanceStatus = 'P' | 'A' | 'L';

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  photoUrl?: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  subjectId: string;
  date: string; // ISO string YYYY-MM-DD
  status: AttendanceStatus;
  notes?: string;
}

export interface LectureLog {
  id: string;
  subjectId: string;
  date: string; // YYYY-MM-DD
  topic: string;
  assignment: string;
  timestamp: string;
}

export interface CorrectionRecord {
  id: string;
  studentId: string;
  studentName: string;
  subjectId: string;
  subjectName: string;
  dateOfAttendance: string;
  timestamp: string;
  previousStatus: AttendanceStatus | 'None';
  newStatus: AttendanceStatus;
  changedBy: string;
}

export interface Subject {
  id: string;
  name: string;
  type: 'Theory' | 'Practical';
  isPracticalEnabled: boolean;
}

export interface ClassSettings {
  excludedDays: number[]; // 0 (Sun) to 6 (Sat)
}

export interface User {
  email: string;
  name: string;
  photoUrl: string;
}

export type AppView = 'DASHBOARD' | 'ATTENDANCE_SHEET' | 'STUDENT_LIST' | 'SUBJECT_LIST' | 'ANALYTICS' | 'HISTORY';
