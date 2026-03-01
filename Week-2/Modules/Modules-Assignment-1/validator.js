// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return "Invalid Title";
  }
  return null;
}

// 2. Validate priority (low, medium, high)
export function validatePriority(priority) {
  const validPriorities = ["low", "medium", "high"];
  if (!validPriorities.includes(priority)) {
    return "Use proper priority.";
  }
  return null;
}

// 3. Validate due date (must be future date)
export function validateDueDate(date) {
  let dueDate=new Date(date);
  let today=new Date();
  if (isNaN(dueDate.getTime()) || dueDate <= today) {
    return "Invalid date.";
  }
  return null;
}
export default { validateTitle, validatePriority, validateDueDate };    