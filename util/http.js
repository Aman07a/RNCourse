import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-d4d4f-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
