import re

colors = {
    'surface': '#0b0f19',
    'surface-dim': '#080a12',
    'surface-bright': '#1a2235',
    'surface-container-lowest': '#05070d',
    'surface-container-low': '#080b12',
    'surface-container': '#0b0f19',
    'surface-container-high': '#121827',
    'surface-container-highest': '#1e293b',
    'on-surface': '#f8fafc',
    'on-surface-variant': '#cbd5e1',
    'inverse-surface': '#f8fafc',
    'inverse-on-surface': '#0b0f19',
    'outline': '#475569',
    'outline-variant': '#334155',
    'surface-tint': '#FF5777',
    'primary': '#FF5777',
    'on-primary': '#ffffff',
    'primary-container': '#9f1239',
    'on-primary-container': '#ffe4e6',
    'inverse-primary': '#fda4af',
    'secondary': '#c5c7c8',
    'on-secondary': '#2e3132',
    'secondary-container': '#494c4d',
    'on-secondary-container': '#babcbd',
    'tertiary': '#dfe1e3',
    'on-tertiary': '#2d3133',
    'tertiary-container': '#c3c5c7',
    'on-tertiary-container': '#4e5254',
    'error': '#ffb4ab',
    'on-error': '#690005',
    'error-container': '#93000a',
    'on-error-container': '#ffdad6',
    'primary / 15%': 'rgba(255, 87, 119, 0.15)',
    'primary / 40%': 'rgba(255, 87, 119, 0.40)'
}

with open('src/index.css', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    color_name = match.group(1)
    return colors.get(color_name, match.group(0))

new_content = re.sub(r"theme\('colors\.([^']+)'\)", replacer, content)

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(new_content)
