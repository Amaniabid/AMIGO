package amigo.tn.controller;


import amigo.tn.services.StatisticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/admin/stats")
public class StatisticController {
    @Autowired
    private StatisticService statisticService;
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/publications")
    public long getTotalPublications() {
        return statisticService.getTotalPublications();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/usersWithUserRole")
    public long getTotalUsersWithUserRole() {
        return statisticService.getTotalUsersWithUserRole();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/reclamationsEnAttente")
    public long getReclamationsEnAttenteCount() {
        return statisticService.getReclamationsEnAttenteCount();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/reclamationsTerminee")
    public long getReclamationsTermineeCount() {
        return statisticService.getReclamationsTermineeCount();
    }

}
