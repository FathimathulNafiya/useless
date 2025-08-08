document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");

    // General toolbar commands
    document.querySelectorAll(".toolbar [data-command]").forEach(btn => {
        btn.addEventListener("click", e => {
            let cmd = btn.dataset.command;
            let val = btn.value || null;
            document.execCommand(cmd, false, val);
        });

        if (btn.tagName === "SELECT" || btn.type === "color") {
            btn.addEventListener("change", e => {
                let cmd = btn.dataset.command;
                let val = btn.value;
                document.execCommand(cmd, false, val);
            });
        }
    });

    // Insert link
    document.getElementById("linkBtn").addEventListener("click", () => {
        const url = prompt("Enter the link URL:");
        if (url) document.execCommand("createLink", false, url);
    });

    // Insert image
    document.getElementById("imgBtn").addEventListener("click", () => {
        const url = prompt("Enter the image URL:");
        if (url) document.execCommand("insertImage", false, url);
    });

    // Save & self-destruct
    document.getElementById("saveBtn").addEventListener("click", () => {
        if (editor.innerHTML.trim() === "") return;
        setTimeout(() => {
            editor.innerHTML = "";
        }, 5000);
    });
});
