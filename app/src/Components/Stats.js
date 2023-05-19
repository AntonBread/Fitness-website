import React from "react"
import { APIBase } from "./data"

export default function Stats() {
    const onDebugClick = async () => {
        const url = `${APIBase}/demo/`

        const formData = new FormData();
        formData.append('id', 10);
        formData.append('name', "obama")

        try {
            const response = await fetch(url, {
              method: 'POST',
              body: formData
            });
      
            if (response.ok) {
              // Request successful
              console.log('POST request succeeded');
            } else {
              // Request failed
              console.log('POST request failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }

    return (
        <div>
            <input
                type="button"
                value="DEBUG REQUEST"
                onClick={onDebugClick}
            />
        </div>
    )
}
