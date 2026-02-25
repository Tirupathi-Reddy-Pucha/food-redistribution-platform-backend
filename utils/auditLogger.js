const auditLogger = (action, userId) => {
  console.log(`[AUDIT] ${action} by user ${userId}`);
};

export default auditLogger;