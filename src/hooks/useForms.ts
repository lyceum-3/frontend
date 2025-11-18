import { useEffect, useState } from "react";
import {formsService} from "../services/formsService";

export const useForms = () => {
    const [forms, setForms] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await formsService.getAll();
                setForms(data);
            } catch (e) {
                console.error('Failed to load forms: ' + e);
            }
        })();
    }, [])

    return forms;
}