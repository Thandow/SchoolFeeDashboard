import { useState } from "react";
const learners = [
  { id: 1, name: "Amahle Dlamini", grade: 8, amount: 3500, due: "2026-05-01", status: "Overdue" },
  { id: 2, name: "Lethabo Mokoena", grade: 10, amount: 4200, due: "2026-06-15", status: "Unpaid" },
  { id: 3, name: "Sipho Nkosi", grade: 9, amount: 3500, due: "2026-04-30", status: "Overdue" },
  { id: 4, name: "Zanele Khumalo", grade: 11, amount: 5100, due: "2026-06-01", status: "Paid" },
  { id: 5, name: "Tebogo Sithole", grade: 8, amount: 3500, due: "2026-06-20", status: "Unpaid" },
  { id: 6, name: "Naledi Motsepe", grade: 12, amount: 6000, due: "2026-05-15", status: "Overdue" },
  { id: 7, name: "Keanu Davids", grade: 9, amount: 3500, due: "2026-06-10", status: "Paid" },
  { id: 8, name: "Precious Mahlangu", grade: 11, amount: 5100, due: "2026-06-25", status: "Unpaid" }
];

function App() {
  const [search, setSearch] = useState("");

  const filteredLearners = learners.filter(
  (learner) =>
    learner.name.toLowerCase().includes(search.toLowerCase()) ||
    learner.grade.toString().includes(search)
);
  const totalCollected = learners
  .filter((l) => l.status === "Paid")
  .reduce((sum, l) => sum + l.amount, 0);

const totalOutstanding = learners
  .filter((l) => l.status !== "Paid")
  .reduce((sum, l) => sum + l.amount, 0);

const overdueCount = learners.filter(
  (l) => l.status === "Overdue"
).length;

const getStatusColor = (status) => {
  switch (status) {
    case "Paid":
      return "green";
    case "Unpaid":
      return "orange";
    case "Overdue":
      return "red";
    default:
      return "black";
  }
};
const exportToCSV = () => {
  const headers = [
    "Name",
    "Grade",
    "Amount Due",
    "Due Date",
    "Status",
  ];

  const rows = filteredLearners.map((l) => [
    l.name,
    l.grade,
    l.amount,
    l.due,
    l.status,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "school-fees.csv";

  link.click();
};
  return (
    <div className="dashboard">
      <h1>School Fee Dashboard</h1>
      <input
  type="text"
  placeholder="Search by name or grade..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<button onClick={exportToCSV}>
  Export CSV
</button>

      <div className="summary">
  <div className="card">
    <h3>Total Collected</h3>
    <p>R{totalCollected}</p>
  </div>

  <div className="card">
    <h3>Total Outstanding</h3>
    <p>R{totalOutstanding}</p>
  </div>

  <div className="card">
    <h3>Overdue Learners</h3>
    <p>{overdueCount}</p>
  </div>
</div>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Amount Due</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredLearners.map((learner) => (
            <tr key={learner.id}>
              <td>{learner.name}</td>
              <td>{learner.grade}</td>
              <td>R{learner.amount}</td>
              <td>{learner.due}</td>
              <td style={{ color: getStatusColor(learner.status) }}>
                {learner.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
