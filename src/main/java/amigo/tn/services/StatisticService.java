package amigo.tn.services;


import amigo.tn.entities.StatutReclamation;
import amigo.tn.repositories.PublicationRepository;
import amigo.tn.repositories.ReclamationRepository;
import amigo.tn.security.user.Role;
import amigo.tn.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReclamationRepository reclamationRepository;

    public long getReclamationsEnAttenteCount() {
        return reclamationRepository.countByStatut(StatutReclamation.EN_ATTENTE);
    }

    public long getReclamationsTermineeCount() {
        return reclamationRepository.countByStatut(StatutReclamation.TERMINEE);
    }

    @Autowired
    private PublicationRepository publicationRepository;

    public long getTotalPublications() {
        return publicationRepository.count();
    }

    public long getTotalUsersWithUserRole() {
        return userRepository.countByRole(Role.USER);
    }
}
