package amigo.tn;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200", "http://127.0.0.1:5000", "http://localhost:50212")
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Autorise les méthodes HTTP GET, POST, PUT, DELETE
                .allowedHeaders("*") // Autorise tous les en-têtes. Vous pouvez spécifier les en-têtes nécessaires séparés par des virgules.
                .allowCredentials(true) // Autorise l'envoi des cookies et des en-têtes d'authentification.
                .maxAge(3400); // Spécifie la durée en secondes pendant laquelle le navigateur peut mettre en cache les résultats de la requête pré-vérification (preflight).
    }
}
