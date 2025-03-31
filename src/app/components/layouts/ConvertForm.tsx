"use client";

import styles from "./ConvertForm.module.css";
import { Button } from "@/app/components/elements/Button";
import { useState } from "react";

export function ConvertForm() {
  const extFrom: string[] = ["png"];
  const extTo: string[] = ["svg"];
  
  const [message, setMessage] = useState("ファイルをアップロードしてください");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className={styles.convertForm}>
      <div className={styles.formContainer}>
        <div className={styles.selection}>
          <div className={styles.from}>
            <h2 className={styles.formTitle}>From</h2>
            <select className={styles.dropdown}>
              <option value="">Select extension</option>
              {extFrom.map((ext) => (
                <option key={ext} value={ext}>{ext}</option>
              ))}
            </select>
          </div>
          <div className={styles.to}>
            <h2 className={styles.formTitle}>To</h2>
            <select className={styles.dropdown}>
              <option value="">Select extension</option>
              {extTo.map((ext) => (
                <option key={ext} value={ext}>{ext}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.uploadContainer}>
          <input className={styles.upload} type="file" />
        </div>
        <div className={styles.downloadForm}>
          <h2 className={styles.message}>{message}</h2>
          <Button disabled={isDisabled}>ダウンロード</Button>
        </div>
      </div>
    </div>
  );
}