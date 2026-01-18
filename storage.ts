
import { Student, AttendanceRecord, Subject, CorrectionRecord, ClassSettings, LectureLog } from '../types';
import { INITIAL_SUBJECTS, MOCK_STUDENTS } from '../constants';

const KEYS = {
  STUDENTS: 'uni_attend_students',
  ATTENDANCE: 'uni_attend_attendance',
  SUBJECTS: 'uni_attend_subjects',
  AUTH: 'uni_attend_auth',
  HISTORY: 'uni_attend_history',
  SETTINGS: 'uni_attend_settings',
  LECTURE_LOGS: 'uni_attend_lecture_logs',
};

export const storage = {
  getStudents: (): Student[] => {
    const data = localStorage.getItem(KEYS.STUDENTS);
    return data ? JSON.parse(data) : MOCK_STUDENTS;
  },
  saveStudents: (students: Student[]) => {
    localStorage.setItem(KEYS.STUDENTS, JSON.stringify(students));
  },
  
  getAttendance: (): AttendanceRecord[] => {
    const data = localStorage.getItem(KEYS.ATTENDANCE);
    return data ? JSON.parse(data) : [];
  },
  saveAttendance: (records: AttendanceRecord[]) => {
    localStorage.setItem(KEYS.ATTENDANCE, JSON.stringify(records));
  },

  getHistory: (): CorrectionRecord[] => {
    const data = localStorage.getItem(KEYS.HISTORY);
    return data ? JSON.parse(data) : [];
  },
  saveHistory: (history: CorrectionRecord[]) => {
    localStorage.setItem(KEYS.HISTORY, JSON.stringify(history));
  },

  getLectureLogs: (): LectureLog[] => {
    const data = localStorage.getItem(KEYS.LECTURE_LOGS);
    return data ? JSON.parse(data) : [];
  },
  saveLectureLogs: (logs: LectureLog[]) => {
    localStorage.setItem(KEYS.LECTURE_LOGS, JSON.stringify(logs));
  },

  getSubjects: (): Subject[] => {
    const data = localStorage.getItem(KEYS.SUBJECTS);
    return data ? JSON.parse(data) : INITIAL_SUBJECTS;
  },
  saveSubjects: (subjects: Subject[]) => {
    localStorage.setItem(KEYS.SUBJECTS, JSON.stringify(subjects));
  },

  getSettings: (): ClassSettings => {
    const data = localStorage.getItem(KEYS.SETTINGS);
    // Default excluded days: Sunday (0), Friday (5), Saturday (6)
    return data ? JSON.parse(data) : { excludedDays: [0, 5, 6] };
  },
  saveSettings: (settings: ClassSettings) => {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  },

  setAuth: (user: any) => {
    localStorage.setItem(KEYS.AUTH, JSON.stringify(user));
  },
  getAuth: () => {
    const data = localStorage.getItem(KEYS.AUTH);
    return data ? JSON.parse(data) : null;
  },
  clearAuth: () => {
    localStorage.removeItem(KEYS.AUTH);
  }
};
