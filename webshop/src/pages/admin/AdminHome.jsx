import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function AdminHome() {

  const { t } = useTranslation();

  return (
    <div>



      <Link to="/admin/add-product">
        <Button variant="success">{t("Add product")}</Button>
      </Link>

      <Link to="/admin/maintain-product">
        <Button variant="primary">{t("Maintain products")}</Button>
      </Link>

      <Link to="/admin/maintain-category">
        <Button variant="warning">{t("Maintain categories")}</Button>
      </Link>

      <Link to="/admin/maintain-shops">
        <Button variant="info">{t("Maintain shops")}</Button>
      </Link>


    </div>
  )
}
