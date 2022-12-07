import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, Attribute, ChangeDetectionStrategy } from '@angular/core';
import { Centro } from '../centro-model/centro.interface';

@Component({
    selector: 'app-centro-card',
    templateUrl: './centro-card.component.html',
    styleUrls: ['./centro-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CentroCardComponent {

    @Input() centro!: Centro;

    @Input() cardIndex!: number;

    @Input() noImage!: TemplateRef<ElementRef>;

    // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

    @Output('centroChanged') centroEditEmitter = new EventEmitter<Centro>();
    
    // @Output('descriptionChanged') descriptionEditEmitter = new EventEmitter<Course>();
    
    // @ViewChild('courseDescription') courseDescription: ElementRef;

    categories: string[] = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];


    
    constructor(@Attribute('type') private type: string) {

    }


    // ngOnChanges(simpleChange : SimpleChanges){
    //     console.log(simpleChange)
    // }

    // ngAfterViewInit() {
    //     // console.log("Course nº " + this.cardIndex + ": " + this.coursesService);
    //     // this.courseDescription = this.courseDescriptionInput.value;

    // }
    

    classesForCards(): string {

        

        if (this.centro.provincia === 'Sevilla') 
            return 'sevilla';
        if (this.centro.provincia === 'Málaga') 
            return 'malaga';
        if (this.centro.provincia === 'Cádiz') 
            return 'cadiz';

        
        return 'no-provincia';
    }


    onCentroViewed(): void {

    //     this.courseEmitter.emit(this.course);

        console.log(this.centro);
    }


    isImageVisible(centro: Centro): boolean {
        if (centro && centro.imagen)
            return true;
        return false;
    }


    onNombreChange(newNombre: string): void {
        this.centro.nombre = newNombre;
    }


    onSaveClicked(nombre: string): void {
        this.centroEditEmitter.emit({...this.centro, nombre});
    }


}
