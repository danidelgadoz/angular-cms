import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ckeditorContent: any;
  gallery: any[] = [];

  constructor() { }

  ngOnInit() {
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  imagesPreview(event) {
    console.log(event.srcElement.files[0]);

    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (_event:any) => {
            this.gallery.push({
                link: _event.target.result,
                file: event.srcElement.files[0],
                name: event.srcElement.files[0].name
            });
            console.log(this.gallery);
        }

        reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveGallery(){
    let formData = new FormData();
    let galleryToSave : any[] = this.gallery;

    for (let i = 0; i < galleryToSave.length; i++) {
        formData.append(galleryToSave[i].name, galleryToSave[i].file);        
    }

    // this.http.post('http://localhost/pruebas/storeImages.php', formData).subscribe(data => {
    //   alert('ok');
    // }, error => {
    //   console.log(error.json());
    // });
  }

}
