import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("theme('fontSize.label-caps[0]')", "0.75rem")
content = content.replace("theme('fontSize.label-caps[1].lineHeight')", "1rem")
content = content.replace("theme('fontSize.label-caps[1].letterSpacing')", "0.05em")
content = content.replace("theme('fontSize.label-caps[1].fontWeight')", "600")

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(content)
