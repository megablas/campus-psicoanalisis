import re

def update_titles(html):
    # This list defines the new titles in order of appearance in the HTML timeline
    new_titles = [
        "Clase 1: Surgimiento del inconsciente",
        "Clase 2: Feriado - Día no laborable",
        "Clase 3: Defensa y conflicto psíquico",
        "Clase 4: Interpretación de los sueños",
        "Clase 5: La primera tópica",
        "Clase 6: Primer Parcial Evaluador",
        "Clase 7: Sexualidad infantil",
        "Clase 8: Conceptualizar la pulsión",
        "Clase 9: Comprender Edipo y Castración",
        "Clase 10: Dimensionar la clínica analítica",
        "Clase 11: Feriado - Revolución de Mayo",
        "Clase 12: Segundo Parcial Evaluador",
        "Clase 13: Analizar la segunda tópica",
        "Clase 14: Feriado - Paso a la Inmortalidad",
        "Clase 15: Relacionar psicoanálisis y cultura",
        "Clase 16: Recuperatorio y Cierre"
    ]
    
    idx = [0]
    
    def replacer(match):
        if idx[0] < len(new_titles):
            title = new_titles[idx[0]]
            res = match.group(1) + title + match.group(3)
            idx[0] += 1
            return res
        return match.group(0)
    
    match_timeline = re.search(r'(<div class="timeline">)(.*?)(</div>\s*</div>\s*<div id="timeline-fade"></div>)', html, re.DOTALL)
    if not match_timeline:
        print("Timeline not found")
        return html
    
    timeline_content = match_timeline.group(2)
    
    # re.sub with 3 groups: (1=open tag) (2=old text) (3=close tag)
    new_timeline_content = re.sub(r'(<h3[^>]*class="tl-title"[^>]*>)\s*(.*?)\s*(</h3>)', replacer, timeline_content)
    
    new_html = html[:match_timeline.start(2)] + new_timeline_content + html[match_timeline.end(2):]
    return new_html

with open('c:/Users/Blas_/Documents/Campus Psicoanalisis/index.html', 'r', encoding='utf-8') as f:
    full_html = f.read()

new_html = update_titles(full_html)

with open('c:/Users/Blas_/Documents/Campus Psicoanalisis/index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
print("Update applied successfully")
