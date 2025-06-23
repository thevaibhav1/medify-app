export const generateDateTabs = () => {
  const today = new Date();
  const tabs = [];

  for (let i = 0; i <= 7; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    const weekday = futureDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const day = futureDate.getDate();
    const month = futureDate.toLocaleDateString("en-US", {
      month: "short",
    });

    const label =
      i === 0 ? "Today" : i === 1 ? "Tomorrow" : `${weekday}, ${day} ${month}`;

    const slots = Math.floor(Math.random() * 10) + 10; // Random 10–19 slots

    tabs.push({ date: label, slots });
  }

  return tabs;
};
