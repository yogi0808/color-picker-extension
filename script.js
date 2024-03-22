const btn = document.querySelector(".btn");
const res = document.querySelector(".result");

const color = async () => {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    res.value = sRGBHex;
    document.body.style.backgroundColor = sRGBHex;
    res.select();
    navigator.clipboard.writeText(res.value);
}

btn.addEventListener("click", color);