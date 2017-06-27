import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

const collections = {
  color: [
    'https://cdn.gomix.com/c0bf32ae-0bd4-4970-9a1a-9e3614092745%2Ffog.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fc1.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fwinter-196339_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fforest-483207_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Friver-1740973_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fforest-1225983_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fforest-1950402_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fgreen-1072828_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Froad-1072823_640.jpg',
    'https://cdn.pixabay.com/photo/2016/09/03/15/31/seascape-1641999_640.jpg'
  ],
  bw: [
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fblack-and-white-1278713_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fcamera-541213_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fwall-175686_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fsea-of-fog-373782_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fzebra-470358_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fdog-188273_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fbuildings-123780_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Ftiger-and-turtle-52691_640.jpg',
    'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Froad-949832_640.jpg'
  ],
  cats: [
    'https://cdn.pixabay.com/photo/2015/05/22/05/52/cat-778315_640.jpg',
    'https://cdn.pixabay.com/photo/2017/02/02/18/15/tabby-cat-2033439_640.jpg'
  ]
};

@Component({
  selector: 'gallery',
  templateUrl: 'templates/gallery.tpl.html'
})
export class GalleryComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  
  thumbnails: String[] = [];
  primaryImage: String;
  
  ngOnInit() {
    this.route.data
      .subscribe(({ collection }) => {        
        let c = collections[collection];
        this.primaryImage = c[Math.ceil((Math.random() * (c.length - 1)))];  
        this.thumbnails = c;        
      });
  }    
  
}