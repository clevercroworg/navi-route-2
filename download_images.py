import os
import time
import urllib.request

# Exact high-quality hotel, resort, and villa photo IDs from Unsplash
UNSPLASH_IDS = {
    "resort-facade-pool": "photo-1566073771259-6a8506099945",
    "sunset-infinity-pool": "photo-1520250497591-112f2f40a3f4",
    "courtyard-pool": "photo-1582719508461-905c673771fd",
    "modern-white-villa": "photo-1613977257363-707ba9348227",
    "luxury-villa-exterior": "photo-1512917774080-9991f1c4c750",
    "tropical-resort-pool": "photo-1571896349842-33c89424de2d",
    "balcony-pool-view": "photo-1584132967334-10e028bd69f7",
    "beachside-pool-deck": "photo-1507525428034-b723cf961d3e",
    "heritage-palace": "photo-1564507592333-c60657eea523",
    "entrance-terracotta": "photo-1544644181-1484b3fdfc62",
    "tropical-lagoon": "photo-1540555700478-4be289fbecef",
    "colonial-facade": "photo-1546412414-8035e1776c9a",
    "beach-house": "photo-1499793983690-e29da59ef1c2"
}

HOTEL_IMAGE_MAPPING = {
    "cmiiaent-resort-goa": ["resort-facade-pool", "sunset-infinity-pool"],
    "amaya-at-anamiva": ["courtyard-pool", "luxury-villa-exterior"],
    "the-golden-crown-hotel-spa": ["tropical-resort-pool", "balcony-pool-view"],
    "hibiscus-oasis-da-alohas": ["modern-white-villa", "beachside-pool-deck"],
    "3102bce-a-vedic-resort-2": ["heritage-palace", "entrance-terracotta"],
    "argo-by-trance": ["sunset-infinity-pool", "courtyard-pool"],
    "jacks-resort": ["tropical-lagoon", "beachside-pool-deck"],
    "laguna-anjuna": ["tropical-resort-pool", "courtyard-pool"],
    "mateus-boutique-hotel": ["colonial-facade", "courtyard-pool"],
    "swim-up-by-whiteflower": ["modern-white-villa", "luxury-villa-exterior"],
    "stone-wood-beach-resort": ["sunset-infinity-pool", "tropical-resort-pool"],
    "mia-bella-beach-cottages": ["beach-house", "beachside-pool-deck"]
}

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
}

def main():
    output_dir = os.path.join("public", "images", "hotels")
    os.makedirs(output_dir, exist_ok=True)
    
    print("Starting download of handpicked premium hotel images...")
    
    for hotel_id, image_keys in HOTEL_IMAGE_MAPPING.items():
        print(f"\nProcessing Hotel: {hotel_id}")
        
        for idx, key in enumerate(image_keys):
            photo_id = UNSPLASH_IDS[key]
            url = f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=1200&q=80"
            
            suffix = "" if idx == 0 else "-2"
            filename = f"{hotel_id}{suffix}.jpg"
            filepath = os.path.join(output_dir, filename)
            
            print(f"Downloading Image {idx+1} ({key}) from Unsplash...")
            
            success = False
            for attempt in range(3):
                try:
                    req = urllib.request.Request(url, headers=HEADERS)
                    with urllib.request.urlopen(req, timeout=15) as response:
                        if response.status == 200:
                            with open(filepath, 'wb') as f:
                                f.write(response.read())
                            success = True
                            print(f"  Saved to {filepath}")
                            break
                except Exception as e:
                    print(f"  Attempt {attempt+1} failed: {e}")
                    time.sleep(1)
            
            if not success:
                print(f"  Error: Failed to download image for {hotel_id} ({key})")
            
            time.sleep(0.5)

if __name__ == "__main__":
    main()
