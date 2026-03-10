import cv2
import os

IMAGE_PATH = "1.png" 
OUTPUT_DIR = "crops"
os.makedirs(OUTPUT_DIR, exist_ok=True)
img = cv2.imread(IMAGE_PATH)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 50, 150)
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (7,7))
dilated = cv2.dilate(edges, kernel, iterations=2)
contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
count = 0
for c in contours:
    x, y, w, h = cv2.boundingRect(c)
    if w < 50 or h < 50:
        continue
    crop = img[y:y+h, x:x+w]
    count += 1
    filename = f"{OUTPUT_DIR}/p{count}.png"
    cv2.imwrite(filename, crop)
print("Products saved:", count)