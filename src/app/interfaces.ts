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
