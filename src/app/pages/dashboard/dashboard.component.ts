import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/service/statistic-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalPublications: number;
  totalUsersWithUserRole: number;
  reclamationEnAttenteCount: number;
  reclamationTermineeCount: number;

  Stats: any[] = []; // Initialisez votre tableau Stats ici

  // Options pour le graphique
  view: any[] = [700, 370];
  showLegend: boolean = true;
  showLabels: boolean = true;
  gradient: boolean = false;
  isDoughnut: boolean = true;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    // Utilisez le service pour récupérer les statistiques
    this.statisticService.getTotalPublications().subscribe(data => {
      this.totalPublications = data;
      this.updateStats(); // Mettez à jour les statistiques après avoir obtenu les données
    });

    this.statisticService.getTotalUsersWithUserRole().subscribe(data => {
      this.totalUsersWithUserRole = data;
      this.updateStats(); // Mettez à jour les statistiques après avoir obtenu les données
    });

    this.statisticService.getReclamationsEnAttenteCount().subscribe(data => {
      this.reclamationEnAttenteCount = data;
      this.updateStats(); // Mettez à jour les statistiques après avoir obtenu les données
    });

    this.statisticService.getReclamationsTermineeCount().subscribe(data => {
      this.reclamationTermineeCount = data;
      this.updateStats(); // Mettez à jour les statistiques après avoir obtenu les données
    });
  }

  private updateStats(): void {
    // Vérifiez si toutes les données nécessaires sont disponibles avant de mettre à jour Stats
    if (
      this.totalPublications !== undefined &&
      this.totalUsersWithUserRole !== undefined &&
      this.reclamationEnAttenteCount !== undefined &&
      this.reclamationTermineeCount !== undefined
    ) {
      // Mettez à jour le tableau Stats avec les valeurs formatées
      this.Stats = [
        { name: 'Total Publications', value: this.totalPublications },
        { name: 'Total Users with User Role', value: this.totalUsersWithUserRole },
        { name: 'Reclamations en Attente Count', value: this.reclamationEnAttenteCount },
        { name: 'Reclamations Terminee Count', value: this.reclamationTermineeCount },
      ];
    }
  }

  // Fonctions pour gérer les événements du graphique
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
