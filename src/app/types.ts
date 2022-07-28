export interface Student {
  id?: string;
  name: string;
  courses: string[] | [];
}

export interface Course {
  id?: string;
  name: string;
  description: string;
  students: string[] | [];
}

export interface ResponseTest {
  status: string;
  statusCode: string;
  message: string;
  errors: string | string[];
  errorMessage: string;
}
