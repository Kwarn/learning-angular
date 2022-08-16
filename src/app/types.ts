export interface Item {
  id?: string;
  name: string;
}

export interface Student extends Item {
  courses: string[] | [];
}

export interface Course extends Item {
  description: string;
  students: string[] | [];
}

export interface Enroll {
  studentId: string;
  courseId: string;
}

export interface ResponseTest {
  status: string;
  statusCode: string;
  message: string;
  errors: string | string[];
  errorMessage: string;
  id: string;
}

export interface ListTypes {
  students?: Student[];
  courses?: Course[];
}

export type ListNames = 'courses' | 'students';
