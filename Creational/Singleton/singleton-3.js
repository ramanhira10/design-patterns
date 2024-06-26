const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: function () {
      if (!pManager) {
        pManager = new ProcessManager();
      }
      return pManager;
    }
  }
})();

const processManager = Singleton.getProcessManager();

const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);