"use client";

import styles from "./ConvertForm.module.css";
import { Button } from "@/app/components/elements/Button";
import { useState } from "react";
import { postImage } from "@/app/lib/postImage";

export function ConvertForm() {
  const extFrom: string[] = ["png"];
  const extTo: string[] = ["svg"];
  
  const [message, setMessage] = useState("ファイルをアップロードしてください");
  const [selectedExt, setSelectedExt] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUploadFile = async () => {
    if (!image) {
      return;
    }
    const url = await postImage(image);
    setConvertedUrl(url);
  };

  return (
    <div className={styles.convertForm}>
      <div className={styles.formContainer}>
        <div className={styles.selection}>
          <div className={styles.from}>
            <h2 className={styles.formTitle}>From</h2>
            <select
              className={styles.dropdown}
              onChange={(e) => setSelectedExt(e.target.value)}
              value={selectedExt}
            >
              <option value="">select extension</option>
              {extFrom.map((ext) => (
                <option key={ext} value={ext}>{ext}</option>
              ))}
            </select>
          </div>
          <div className={styles.to}>
            <h2 className={styles.formTitle}>To</h2>
            <select className={styles.dropdown}>
              <option value="">select extension</option>
              {extTo.map((ext) => (
                <option key={ext} value={ext}>{ext}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.uploadForm}>
          <div className={styles.uploadContainer}>
            <input
              className={styles.upload}
              type="file"
              accept={selectedExt ? `image/${selectedExt}` : "image/*"}
              onChange={handleChangeFile}
            />
          </div>
          <Button onClick={handleUploadFile}>アップロード</Button>
        </div>
        <div className={styles.downloadForm}>
          <h2 className={styles.message}>{message}</h2>
          <Button disabled={isDisabled}>ダウンロード</Button>
        </div>
      </div>
    </div>
  );
}