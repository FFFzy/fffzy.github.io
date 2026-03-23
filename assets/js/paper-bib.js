(function() {
  function normalizeBibText(rawText) {
    var text = rawText.replace(/^\s*\n/, "").replace(/\s*$/, "");
    var lines = text.split("\n");
    var minIndent = null;

    lines.forEach(function(line) {
      if (!line.trim()) {
        return;
      }

      var indent = line.match(/^(\s*)/)[1].length;
      if (minIndent === null || indent < minIndent) {
        minIndent = indent;
      }
    });

    if (!minIndent) {
      return lines.join("\n").trim();
    }

    return lines.map(function(line) {
      return line.slice(minIndent);
    }).join("\n").trim();
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function(resolve, reject) {
      var helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      helper.style.pointerEvents = "none";
      document.body.appendChild(helper);
      helper.select();

      try {
        if (document.execCommand("copy")) {
          resolve();
        } else {
          reject(new Error("Copy command was not successful."));
        }
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(helper);
      }
    });
  }

  function initPaperBibModal() {
    var modal = document.getElementById("paper-bib-modal");
    if (!modal) {
      return;
    }

    var title = document.getElementById("paper-bib-title");
    var content = document.getElementById("paper-bib-content");
    var copyButton = document.getElementById("paper-bib-copy");
    var status = document.getElementById("paper-bib-status");
    var closeButton = modal.querySelector("[data-paper-bib-close]");
    var lastTrigger = null;
    var currentBibText = "";
    var resetStatusTimer = null;

    function setStatus(message) {
      window.clearTimeout(resetStatusTimer);
      status.textContent = message;

      if (!message) {
        return;
      }

      resetStatusTimer = window.setTimeout(function() {
        status.textContent = "";
      }, 1800);
    }

    function closeModal() {
      if (modal.hidden) {
        return;
      }

      modal.hidden = true;
      document.body.classList.remove("paper-bib-open");
      setStatus("");

      if (lastTrigger) {
        lastTrigger.focus();
      }
    }

    function openModal(trigger) {
      var templateId = trigger.getAttribute("data-bib-template");
      var template = document.getElementById(templateId);
      if (!template) {
        return;
      }

      currentBibText = normalizeBibText(template.innerHTML);
      title.textContent = "Citation";
      content.textContent = currentBibText;
      modal.hidden = false;
      document.body.classList.add("paper-bib-open");
      setStatus("");

      lastTrigger = trigger;
      closeButton.focus();
    }

    document.querySelectorAll(".paper-bib-trigger").forEach(function(trigger) {
      trigger.addEventListener("click", function() {
        openModal(trigger);
      });
    });

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });

    copyButton.addEventListener("click", function() {
      if (!currentBibText) {
        return;
      }

      copyText(currentBibText).then(function() {
        setStatus("Copied to clipboard");
      }).catch(function() {
        setStatus("Copy failed");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPaperBibModal);
  } else {
    initPaperBibModal();
  }
})();
