import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'milestone2',
  templateUrl: './milestone2.component.html',
  styleUrls: ['./milestone2.component.scss']
})
export class Milestone2Component implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'analytics',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/analytics.svg'));
    iconRegistry.addSvgIcon(
      'bullhorn',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/bullhorn.svg'));
    iconRegistry.addSvgIcon(
      'calendar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/calendar.svg'));
    iconRegistry.addSvgIcon(
      'dubbing',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/dubbing.svg'));
    iconRegistry.addSvgIcon(
      'map',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/map.svg'));
    iconRegistry.addSvgIcon(
      'training2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/training.svg'));
    iconRegistry.addSvgIcon(
      'video',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/video.svg'));
    iconRegistry.addSvgIcon(
      'yoga',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/m2-features/yoga.svg'));
    iconRegistry.addSvgIcon(
      'contract',
      sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/contract.svg'));
    iconRegistry.addSvgIcon(
      'broken-bone',
      sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/broken-bone.svg'));
    iconRegistry.addSvgIcon(
      'fatigue',
      sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/fatigue.svg'));
    iconRegistry.addSvgIcon(
      'motivation',
      sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/motivation.svg'));
    iconRegistry.addSvgIcon(
      'platform',
      sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/platform.svg'));
    iconRegistry.addSvgIcon(
      'social-care',
      sanitizer.bypassSecurityTrustResourceUrl('assets/color-icons/social-care.svg'));
  }

  ngOnInit(): void {
  }

}
