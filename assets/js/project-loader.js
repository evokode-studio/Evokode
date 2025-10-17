// Archivo: assets/js/project-loader.js (Versión Actualizada con Botón)

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const lang = localStorage.getItem('language') || 'en';

    if (!projectId) {
        document.body.innerHTML = '<h1>Error: Project not found.</h1>';
        return;
    }

    try {
        const response = await fetch(`./assets/languages/${lang}.json`);
        const translations = await response.json();
        const projectData = translations.projects[projectId];

        if (!projectData) {
            document.body.innerHTML = `<h1>Error: Project data for "${projectId}" not found.</h1>`;
            return;
        }

        // Llenar la plantilla con los datos del proyecto (código existente)
        document.querySelectorAll('[data-project-key]').forEach(element => {
            const key = element.getAttribute('data-project-key');
            if (projectData[key]) {
                if (element.tagName === 'IMG') {
                    element.src = projectData[key];
                    element.alt = projectData['title'];
                } else {
                    element.innerHTML = projectData[key];
                }
            }
        });

        // =================== INICIO DE LA PARTE NUEVA ===================
        
        // Conectar el botón "Visit Site"
        const visitSiteBtn = document.getElementById('visit-site-btn');
        if (visitSiteBtn && projectData.live_url) {
            visitSiteBtn.href = projectData.live_url;
            // Traducir el texto del botón
            visitSiteBtn.textContent = translations.project_visit_site_btn || 'Visit Site';
        } else if (visitSiteBtn) {
            // Si el proyecto no tiene una URL en vivo, ocultamos el botón
            visitSiteBtn.style.display = 'none';
        }

        // ==================== FIN DE LA PARTE NUEVA =====================

        document.title = `${projectData.title} | EVOKODE STUDIO`;
        
        // Traducir el texto del menú de estado
        const statusBarText = document.getElementById('status-bar-text-project');
        if (statusBarText && translations.status_available) {
            statusBarText.textContent = translations.status_available;
        }

    } catch (error) {
        console.error('Failed to load project data:', error);
    }
});