import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-system',
  templateUrl: './phone-system.component.html',
  styleUrls: ['./phone-system.component.scss']
})
export class PhoneSystemComponent implements OnInit {

  placesAndFares
  plans

  selectedOrigin
  selectedOriginName
  selectedDestination
  selectedDestinationName
  selectedTime
  avaliableDestiations: any[] = []

  selectedValues = false

  pricePerMinute

  wrongTime

  showList = false
  showBtn = false

  finalResults = {
    thirtyValue: null,
    sixtyValue: null,
    oneHundredAndTwentyValue: null,
  }

  constructor(
  ) { }

  ngOnInit() {
    this.placesAndFares = [
      {
        ddd: 11,
        location: 'São Paulo',
        destinations: [
          {
            ddd: 16,
            location: 'Ribeirão Preto',
            pricePerMinute: 1.9
          },
          {
            ddd: 17,
            location: 'Mirassol',
            pricePerMinute: 1.7
          },
          {
            ddd: 18,
            location: 'Tupi Paulista',
            pricePerMinute: 0.9
          }
        ]
      },
      {
        ddd: 16,
        location: 'Ribeirão Preto',
        destinations: [
          {
            ddd: 11,
            location: 'São Paulo',
            pricePerMinute: 2.9
          },
          {
            ddd: 17,
            location: 'Mirassol',
            pricePerMinute: null
          },
          {
            ddd: 18,
            location: 'Tupi Paulista',
            pricePerMinute: null
          }
        ]
      },
      {
        ddd: 17,
        location: 'Mirassol',
        destinations: [
          {
            ddd: 16,
            location: 'Ribeirão Preto',
            pricePerMinute: null
          },
          {
            ddd: 11,
            location: 'São Paulo',
            pricePerMinute: 2.7
          },
          {
            ddd: 18,
            location: 'Tupi Paulista',
            pricePerMinute: null
          }
        ]
      },
      {
        ddd: 18,
        location: 'Tupi Paulista',
        destinations: [
          {
            ddd: 16,
            location: 'Ribeirão Preto',
            pricePerMinute: null
          },
          {
            ddd: 17,
            location: 'Mirassol',
            pricePerMinute: null
          },
          {
            ddd: 11,
            location: 'São Paulo',
            pricePerMinute: 1.9
          }
        ]
      }
    ]

    this.plans = [
      {
        name: 'FaleMuito 30',
        minutes: 30
      },
      {
        name: 'FaleMuito 60',
        minutes: 60
      },
      {
        name: 'FaleMuito 120',
        minutes: 120
      }
    ]
  }

  setOriginValue(evt) {
    this.avaliableDestiations = []
    this.selectedDestination = null
    this.selectedDestinationName = null
    this.pricePerMinute = null
    this.selectedValues = false
    this.wrongTime = false
    this.showBtn = false
    this.showList = false
    let results = JSON.parse(evt)

    this.selectedOrigin = results.ddd
    this.selectedOriginName = results.location

    for (let i = 0; i < results.destinations.length; i++) {
      if (results.destinations[i].pricePerMinute) {
        this.avaliableDestiations.push(results.destinations[i])
      }
    }
  }

  setDestinationValue(evt) {
    if (evt) {
      let results = JSON.parse(evt)

      this.selectedValues = true
      this.selectedDestination = results.ddd
      this.selectedDestinationName = results.location
      this.pricePerMinute = results.pricePerMinute

      console.log(this.pricePerMinute)
    } else {
      this.showBtn = false
      this.selectedValues = false
    }


  }

  checkTimeAndPlace(evt) {
    if (/[a-z]/.test(evt)) {
      this.wrongTime = true
      this.showBtn = false
    } else {
      this.wrongTime = false
      this.selectedTime = parseInt(evt)
      this.showBtn = true
    }
  }

  countValues() {
    this.showList = true


    let resolution = this.pricePerMinute * 0.10
    let oneHundredAndTwentyTimeDiff = this.selectedTime - 120
    let sixtyTimeDiff = this.selectedTime - 60
    let thirtyTimeDiff = this.selectedTime - 30


    if(this.selectedTime <= 30) {
      this.finalResults.oneHundredAndTwentyValue = 0
      this.finalResults.sixtyValue = 0
      this.finalResults.thirtyValue = 0
    } else if(this.selectedTime > 30 && this.selectedTime <= 60) {
      this.finalResults.oneHundredAndTwentyValue = 0
      this.finalResults.sixtyValue = 0
      this.finalResults.thirtyValue  = thirtyTimeDiff * resolution
    } else if(this.selectedTime > 60 && this.selectedTime <= 120) {
      this.finalResults.oneHundredAndTwentyValue = 0
      this.finalResults.sixtyValue  = sixtyTimeDiff * resolution
      this.finalResults.thirtyValue  = thirtyTimeDiff * resolution
    } else if(this.selectedTime > 60) {
      this.finalResults.oneHundredAndTwentyValue = oneHundredAndTwentyTimeDiff * resolution
      this.finalResults.sixtyValue = sixtyTimeDiff * resolution
      this.finalResults.thirtyValue  = thirtyTimeDiff * resolution
    }
  }

}
