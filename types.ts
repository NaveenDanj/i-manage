export type User = {
  email: string;
  given_name: string;
  family_name: string;
  name: string;
  picture: string;
  phoneNumber: string;
  uid: string;
  organizations: string[];
};

export type Organization = {
  uid?: string;
  name: string;
  users: _User[];
  collections: string[];
};

export type Collection = {
  uid?: string;
  organizationId: string;
  name: string;
  type: string;
  installmentAmount: number;
  totalAmount: number;
  totalExpense: number;
  totalIncome: number;
  users: _User[];
  expenses: Expense[];
  payments: Payment[];
};

export type Expense = {
  userId: string;
  description: string;
  amount: number;
  date: Date;
  proof: string | null;
  status: string;
};

export type Payment = {
  userId: string;
  paymentPeriod: string;
  paymentDate: Date;
  amount: number;
};

export type Transaction = {
  userId: string;
  orgnizationId: string;
  collectionId: string;
  amount: number;
  type: string;
  date: Date;
  note: string;
};

export type Notification = {
  userId: string;
  type: string;
  header: string;
  content: string;
  date: Date;
};

type _User = {
  userId: string;
  role: string;
};
