.highlights {
  background: var(--gray-200);
  color: var(--gray-1020);
}

.highlights img {
  display: block;
  width: 100%;
}

.sliderItem {

}

.sliderItemInfo {
  padding: var(--px-30);
}

.slider-decorator-0,
.slider-decorator-1 {
  display: none;
}

@media (min-width: 768px) {
  .colLarge {
    flex-basis: 60%;
    max-width: 60%;
    min-height: 20em;
    padding: 5%;
  }

  .colSmall {
    flex-basis: 40%;
    max-width: 40%;
  }

  .sliderItem {
    display: flex;
  }
}
