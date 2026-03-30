import re

def build_timeline():
    return '''                    <div class="timeline">
                        <!-- Clase 1 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #94a3b8; background: #94a3b8;"></div>
                            <div class="tl-date"><div class="day" style="color:#94a3b8;">16</div><div class="month" style="color:#94a3b8;">Mar</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #64748b;">Clase 1: Surgimiento del inconsciente</h3>
                                    <span class="tl-badge normal" style="background: #f1f5f9; color: #94a3b8;">Unidad 1</span>
                                </div>
                                <p class="tl-desc" style="color: #94a3b8;">Presentación de la materia. Contexto histórico. La histeria. El descubrimiento del inconsciente.</p>
                                <div class="tl-meta">
                                    <span class="tag" style="color:#94a3b8;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio" style="opacity: 0.8;">
                                        • Freud, S. (1910). Cinco conferencias sobre psicoanálisis. Conferencia 1.<br>
                                        • Freud, S. (1893). "Charcot".<br>
                                        • Tallaferro, A. (1985). Curso básico de psicoanálisis. Cap. 1.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Feriado -->
                        <div class="tl-item" style="background: #f8fafc;">
                            <div class="tl-dot" style="border-color: #cbd5e1; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day" style="color: #94a3b8;">23</div><div class="month" style="color: #94a3b8;">Mar</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #64748b;">Feriado: Día no laborable</h3>
                                    <span class="tl-badge holiday">Puente 24 Mar</span>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 2 (AHORA) -->
                        <div class="tl-item" style="border-color: var(--accent-color); box-shadow: 0 10px 40px rgba(13,148,136,0.15);">
                            <div class="tl-dot" style="background: var(--accent-color);"></div>
                            <div class="tl-date"><div class="day">30</div><div class="month">Mar</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 2: Defensa y conflicto psíquico</h3>
                                    <span class="tl-badge normal" style="background: var(--accent-color); color: white; box-shadow: 0 4px 10px rgba(13,148,136,0.3);">ESTA SEMANA</span>
                                </div>
                                <p class="tl-desc">La defensa como operación fundante. Síntoma como formación de compromiso.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1895). Estudios sobre la histeria. Cap. I: Comunicación preliminar.<br>
                                        • Freud, S. (1894). "Las neuropsicosis de defensa".<br>
                                        • Tallaferro, A. (1985). Curso básico de psicoanálisis. Cap. 2.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 3 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">06</div><div class="month">Abr</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 3: Interpretación de los sueños</h3>
                                    <span class="tl-badge normal">Unidad 2</span>
                                </div>
                                <p class="tl-desc">El sueño como vía regia al inconsciente. Deseo inconsciente. Interpretación.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Clase Presencial</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1900). La interpretación de los sueños. Caps. II y VII.<br>
                                        • Freud, S. (1901). "Sobre el sueño".
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 4 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">13</div><div class="month">Abr</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 4: La primera tópica</h3>
                                    <span class="tl-badge normal">Unidad 2</span>
                                </div>
                                <p class="tl-desc">Actos fallidos. La represión como mecanismo de defensa. Primera tópica.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1901). Psicopatología de la vida cotidiana. Cap. I.<br>
                                        • Freud, S. (1915). "La represión".<br>
                                        • Freud, S. (1915). "Lo inconsciente". Caps. II y IV.<br>
                                        • Freud, S. (1916-17). Conferencias de introducción al psicoanálisis. Conferencias 5 y 6.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Parcial 1 -->
                        <div class="tl-item" style="border: 2px solid #fecaca; background: #fffbfa;">
                            <div class="tl-dot" style="border-color: #ef4444; background: #fee2e2;"></div>
                            <div class="tl-date"><div class="day" style="color: #ef4444;">20</div><div class="month" style="color: #ef4444;">Abr</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #b91c1c;">Primer Parcial Evaluador</h3>
                                    <span class="tl-badge exam">📝 Examen Presencial</span>
                                </div>
                                <p class="tl-desc">Evaluación de integración de contenidos correspondientes a las Unidades 1 y 2 de la materia.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Aula presencial</span>
                                    <div class="tl-biblio">
                                        Toda la bibliografía obligatoria de las Unidades 1 y 2.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 6 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">27</div><div class="month">Abr</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 6: Sexualidad infantil</h3>
                                    <span class="tl-badge normal">Unidad 3</span>
                                </div>
                                <p class="tl-desc">La sexualidad en psicoanálisis. Libido. Autoerotismo. Diferencia entre instinto y pulsión.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1905). Tres ensayos de teoría sexual. Ensayo I.<br>
                                        • Freud, S. (1916-17). Conferencias de introducción al psicoanálisis. Conferencia 7.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 7 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">04</div><div class="month">May</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 7: Conceptualizar la pulsión</h3>
                                    <span class="tl-badge normal">Unidad 3</span>
                                </div>
                                <p class="tl-desc">Concepto de pulsión. Destinos de pulsión. Fijación y regresión.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Clase Presencial</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1915). "Pulsiones y destinos de pulsión".<br>
                                        • Freud, S. (1905). Tres ensayos de teoría sexual. Ensayo II.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 8 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">11</div><div class="month">May</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 8: Comprender Edipo y Castración</h3>
                                    <span class="tl-badge normal">Unidad 3</span>
                                </div>
                                <p class="tl-desc">Organización genital infantil. Complejo de Edipo. Angustia de castración.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1923). "Organización genital infantil".<br>
                                        • Freud, S. (1924). "El sepultamiento del complejo de Edipo".<br>
                                        • Freud, S. (1909). "Análisis de la fobia de un niño de cinco años [Caso Hans]". Introducción.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 9 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">18</div><div class="month">May</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 9: Dimensionar la clínica analítica</h3>
                                    <span class="tl-badge normal">Unidad 4</span>
                                </div>
                                <p class="tl-desc">La transferencia. La repetición en análisis. Resistencia.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Clase Presencial</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1905). "Fragmento de análisis de un caso de histeria [Dora]". Introducción.<br>
                                        • Freud, S. (1912). "Sobre la dinámica de la transferencia".<br>
                                        • Freud, S. (1914). "Recordar, repetir y reelaborar".
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Feriado -->
                        <div class="tl-item" style="background: #f8fafc;">
                            <div class="tl-dot" style="border-color: #cbd5e1; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day" style="color: #94a3b8;">25</div><div class="month" style="color: #94a3b8;">May</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #64748b;">Feriado: Revolución de Mayo</h3>
                                    <span class="tl-badge holiday">Sin clase</span>
                                </div>
                            </div>
                        </div>

                        <!-- Parcial 2 -->
                        <div class="tl-item" style="border: 2px solid #fecaca; background: #fffbfa;">
                            <div class="tl-dot" style="border-color: #ef4444; background: #fee2e2;"></div>
                            <div class="tl-date"><div class="day" style="color: #ef4444;">01</div><div class="month" style="color: #ef4444;">Jun</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #b91c1c;">Segundo Parcial Evaluador</h3>
                                    <span class="tl-badge exam">📝 Examen Presencial</span>
                                </div>
                                <p class="tl-desc">Evaluación de integración de contenidos correspondientes a las Unidades 3 y 4 de la materia.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Aula presencial</span>
                                    <div class="tl-biblio">
                                        Toda la bibliografía obligatoria de las Unidades 3 y 4.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 11 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">08</div><div class="month">Jun</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 11: Analizar la segunda tópica</h3>
                                    <span class="tl-badge normal">Unidad 4</span>
                                </div>
                                <p class="tl-desc">Problema de la repetición. Límites del principio de placer. Pulsión de muerte. Segunda tópica.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1920). Más allá del principio del placer. Caps. IV y V.<br>
                                        • Freud, S. (1923). El yo y el ello. Caps. I y II.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Feriado -->
                        <div class="tl-item" style="background: #f8fafc;">
                            <div class="tl-dot" style="border-color: #cbd5e1; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day" style="color: #94a3b8;">15</div><div class="month" style="color: #94a3b8;">Jun</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #64748b;">Feriado: Paso a la Inmortalidad</h3>
                                    <span class="tl-badge holiday">Sin clase</span>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 12 -->
                        <div class="tl-item">
                            <div class="tl-dot" style="border-color: #e2e8f0; border-width: 3px;"></div>
                            <div class="tl-date"><div class="day">22</div><div class="month">Jun</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title">Clase 12: Relacionar psicoanálisis y cultura</h3>
                                    <span class="tl-badge normal">Unidad 4</span>
                                </div>
                                <p class="tl-desc">Relación entre sujeto y cultura. El malestar como estructural. Escuela inglesa y francesa.</p>
                                <div class="tl-meta">
                                    <span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg> Clase sincrónica</span>
                                    <div class="tl-biblio">
                                        • Freud, S. (1930). El malestar en la cultura. Caps. II y III.<br>
                                        • Freud, S. (1907). "Acciones obsesivas y prácticas religiosas".<br>
                                        • Lacan, J. (1949). "El estadio del espejo...".<br>
                                        • Segal, H. (1965). Introducción a la obra de Melanie Klein. Cap. 1.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Clase 13 -->
                        <div class="tl-item" style="border-color: #6366f1; background: #eef2ff;">
                            <div class="tl-dot" style="border-color: #6366f1; background: #c7d2fe;"></div>
                            <div class="tl-date"><div class="day" style="color: #4f46e5;">29</div><div class="month" style="color: #4f46e5;">Jun</div></div>
                            <div class="tl-content">
                                <div class="tl-header">
                                    <h3 class="tl-title" style="color: #4338ca;">Clase 13: Recuperatorio y Cierre</h3>
                                    <span class="tl-badge normal" style="background: #4f46e5; color: white;">FINAL</span>
                                </div>
                                <p class="tl-desc" style="color: #4f46e5;">Recuperación de instancias e integración conceptual general de la materia.</p>
                                <div class="tl-meta">
                                    <span class="tag" style="background: white; color: #4338ca; border: none;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Aula presencial</span>
                                    <div class="tl-biblio">
                                        Toda la bibliografía de la asignatura.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>'''

with open('c:/Users/Blas_/Documents/Campus Psicoanalisis/index.html', 'r', encoding='utf-8') as f:
    full_html = f.read()

match = re.search(r'(\s*)<div class="timeline">[\s\S]*?</div>\s*</div>\s*<div id="timeline-fade"></div>', full_html)
if match:
    start = match.start()
    end = match.end()
    new_html = full_html[:start] + '\n' + build_timeline() + '\n                </div>\n                <div id="timeline-fade"></div>' + full_html[end:]
    with open('c:/Users/Blas_/Documents/Campus Psicoanalisis/index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Replacement successful")
else:
    print("Could not find timeline div")
