import sys
from PIL import Image

def process_ink_style(input_path, output_path):
    print(f"Processing: {input_path}")
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    # Colors
    INK_BLUE = (29, 61, 158, 255)       # Royal/Ink blue
    ORANGE_ACCENT = (255, 107, 0, 255)   # Orange brand color
    TRANSPARENT = (0, 0, 0, 0)

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # If transparent, keep it
            if a < 30:
                pixels[x, y] = TRANSPARENT
                continue

            # Calculate luminance
            luminance = 0.299 * r + 0.587 * g + 0.114 * b

            # Check if it is orange
            is_orange = (r - b > 50) and (r - g > 20) and r > 120

            if is_orange:
                # Retain and clean up orange accent color
                pixels[x, y] = ORANGE_ACCENT
            elif luminance < 200:
                # Convert dark sketch outlines to royal blue ink
                pixels[x, y] = INK_BLUE
            else:
                # Convert white/light backgrounds to transparent
                pixels[x, y] = TRANSPARENT

    img.save(output_path, "PNG")
    print(f"Saved processed ink-style drawing to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python process_ink_style.py <input_path> <output_path>")
        sys.exit(1)
    process_ink_style(sys.argv[1], sys.argv[2])
