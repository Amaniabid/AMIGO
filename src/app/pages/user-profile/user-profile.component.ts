import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  fullName: string = "";
  email: string = "";
  prenom: string = "";
  nom: string = "";
  password: string = "";
  
  // Ajoutez ces variables pour gérer l'image
  selectedImage: File | null = null;
  imageUrl: string = 'assets/img/theme/team-2-800x800.jpg';

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user'));
    this.fullName = user.lastname + " " + user.firstname;
    this.prenom = user.firstname;
    this.nom = user.lastname;
    this.email = user.email;
  }

  onSelect(event) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      this.selectedImage = event.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(this.selectedImage);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      };
    } else {
      window.alert('Please select a correct image format');
    }
  }

  update() {
    var userAct = JSON.parse(localStorage.getItem('user'));
    var user = new User();
    user.firstname = this.prenom;
    user.lastname = this.nom;
    user.password = this.password;

    // Assurez-vous que this.selectedImage contient l'image sélectionnée, puis envoyez-la au serveur pour mise à jour.
    // Vous devez ajouter une méthode de service pour gérer l'envoi de l'image au serveur.

    this.userService.updateUser(userAct.id, user, this.selectedImage).subscribe(
      response => {
        Swal.fire('Success', 'mise à jour de l\'utilisateur avec succès.', 'success');
        localStorage.clear();
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
