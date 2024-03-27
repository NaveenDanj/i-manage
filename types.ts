export type User = {
  email: string;
  given_name: string;
  family_name: string;
  name: string;
  picture: string;
  phoneNumber: string;
  uid: string;
};

export type Collection = {
  organizationId: string;
  name: string;
  type: string;
  installmentAmount: number;
  totalAmount: number;
  totalExpense: number;
  totalIncome: number;
  users: {
    [userId: string]: _User;
  };
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

type _User = {
  userId: string;
  role: string;
};