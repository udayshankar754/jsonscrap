import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carausel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carausel.component.html',
  styleUrl: './carausel.component.css'
})
export class CarauselComponent implements OnInit, OnDestroy {
   slides = [
    {
        acName: "Arithang (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK242604.jpg",
        candidateName: "Arun Kumar Upreti",
        partyName: "SKM",
        partyImage: "https://www.indiastatelections.com/images/party/SKM.png",
        status: "Won"
    },
    {
        acName: "Soreng-Chakung (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK241901.jpg",
        candidateName: "P S Tamang",
        partyName: "SKM",
        partyImage: "https://www.indiastatelections.com/images/party/SKM.png",
        status: "Won"
    },
    {
        acName: "Namchi-Singhithang (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK241102.jpg",
        candidateName: "Krishna Kumari Rai",
        partyName: "SKM",
        partyImage: "https://www.indiastatelections.com/images/party/SKM.png",
        status: "Won"
    },
    {
        acName: "Rhenock (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK241901.jpg",
        candidateName: "P S Tamang",
        partyName: "SKM",
        partyImage: "https://www.indiastatelections.com/images/party/SKM.png",
        status: "Won"
    },
    {
        acName: "Upper Burtuk (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK242804.jpg",
        candidateName: "Dilli Ram Thapa",
        partyName: "BJP",
        partyImage: "https://www.indiastatelections.com/images/party/BJP.png",
        status: "Lost"
    },
    {
        acName: "Namcheybung (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK242202.jpg",
        candidateName: "Pawan Kumar Chamling",
        partyName: "SDF",
        partyImage: "https://www.indiastatelections.com/images/party/SDF.png",
        status: "Lost"
    },
    {
        acName: "Gangtok (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK242701.jpg",
        candidateName: "Snumit Targain",
        partyName: "INC",
        partyImage: "https://www.indiastatelections.com/images/party/INC.png",
        status: "Lost"
    },
    {
        acName: "Barfung (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK240904.jpg",
        candidateName: "Bhaichung Bhutia",
        partyName: "SDF",
        partyImage: "https://www.indiastatelections.com/images/party/SDF.png",
        status: "Lost"
    },
    {
        acName: "Poklok-Kamrang (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK242202.jpg",
        candidateName: "Pawan Kumar Chamling",
        partyName: "SDF",
        partyImage: "https://www.indiastatelections.com/images/party/SDF.png",
        status: "Lost"
    },
    {
        acName: "Rhenock (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK241905.jpg",
        candidateName: "Som Nath Poudyal",
        partyName: "SDF",
        partyImage: "https://www.indiastatelections.com/images/party/SDF.png",
        status: "Lost"
    },
    {
        acName: "Maneybung-Dentam (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK240306.jpg",
        candidateName: "Narendra Kumar Subba",
        partyName: "BJP",
        partyImage: "https://www.indiastatelections.com/images/party/BJP.png",
        status: "Lost"
    },
    {
        acName: "Barfung (Sikkim)",
        candidateImage: "https://www.indiastatelections.com/images/candidate/2024/SK/SK240902.jpg",
        candidateName: "Tashi Dadul Bhutia",
        partyName: "BJP",
        partyImage: "https://www.indiastatelections.com/images/party/BJP.png",
        status: "Lost"
    }
];

    
  currentSlide = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  isSlideVisible(index: number): boolean {
    const totalVisibleSlides = 4;
    const visibleRangeStart = this.currentSlide;
    const visibleRangeEnd = (this.currentSlide + totalVisibleSlides) % this.slides.length;
    if (visibleRangeStart < visibleRangeEnd) {
      return index >= visibleRangeStart && index < visibleRangeEnd;
    } else {
      return index >= visibleRangeStart || index < visibleRangeEnd;
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  onMouseEnter() {
    this.stopAutoSlide();
  }

  onMouseLeave() {
    this.startAutoSlide();
  }
}