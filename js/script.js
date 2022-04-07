const inputs = document.querySelectorAll(".controls input");

function update(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener("change", update));
inputs.forEach(input => input.addEventListener("mousemove", update));