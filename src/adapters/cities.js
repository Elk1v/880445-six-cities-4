

export const getAdaptedCities = (offers) => {
  return offers.map((offer) =>({
    city: offer.city.name,
    id: offer.id,
    center: [offer.city.location.latitude, offer.city.location.longitude],
    title: offer.title,
    features: {
      type: offer.type,
      bedrooms: offer.bedrooms,
      adults: offer.max_adults,
    },
    rating: offer.rating,
    isPremium: offer.is_premium,
    isBookmarked: offer.is_favorite,
    price: offer.price,
    images: offer.images,
    inside: offer.goods,
    host: {
      name: offer.host.name,
      avatar: offer.host.avatar_url,
      text: [offer.description],
    },
    coords: [offer.location.latitude, offer.location.longitude],
  }));
};
