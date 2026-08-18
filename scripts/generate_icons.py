from pathlib import Path
from PIL import Image, ImageDraw

base = Path(__file__).resolve().parents[1] / "public" / "icons"
base.mkdir(parents=True, exist_ok=True)

def build(size: int, name: str) -> None:
    image = Image.new("RGBA", (size, size), "#19352c")
    draw = ImageDraw.Draw(image)
    scale = size / 64
    def point(x, y):
        return (round(x * scale), round(y * scale))
    width = max(1, round(3 * scale))
    ivory = "#f6f0e4"
    gold = "#dca83a"
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=round(12 * scale), fill="#19352c")
    draw.line([point(10, 46), point(54, 46)], fill=ivory, width=width, joint="curve")
    draw.line([point(15, 46), point(15, 32), point(23, 22), point(27, 32), point(32, 13), point(37, 32), point(41, 22), point(49, 32), point(49, 46)], fill=ivory, width=width, joint="curve")
    draw.line([point(17, 37), point(47, 37)], fill=ivory, width=width)
    draw.line([point(25, 46), point(25, 39), point(39, 39), point(39, 46)], fill=ivory, width=width)
    draw.line([point(15, 29), point(23, 20), point(27, 28)], fill=gold, width=width, joint="curve")
    draw.line([point(30, 19), point(32, 14), point(34, 19)], fill=gold, width=width, joint="curve")
    draw.line([point(41, 28), point(45, 20), point(53, 29)], fill=gold, width=width, joint="curve")
    image.save(base / name)

build(16, "favicon-16.png")
build(32, "favicon-32.png")
build(180, "apple-touch-icon.png")
