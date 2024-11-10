
  export const data = [
    ["From", "To", "Weight"],
    ['Salary', 'Bills', 3000],
    ['Bills', 'Electric Bill', 1000],
    ['Bills', 'Mobile Bill', 2000],
    ['Salary', 'Savings', 1000],
    ['Salary', 'Monthly Expenses', 3000],
    ['Monthly Expenses', 'Rent', 1000],
    ['Monthly Expenses', 'Groceries', 800],
    ['Monthly Expenses', 'Utilities', 500],
    ['Monthly Expenses', 'Transportation', 700],
    ['Savings', 'Investments', 500],
    ['Savings', 'Emergency Fund', 500],
  ];
  
  export const options = {
    sankey: {
      link: { color: { fill: "#F7DC6F" } },
      node: {
        colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC08B", "#9966FF"],
        label: { color: "#871b47" }
      }
    }
  };