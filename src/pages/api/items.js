import { items } from "../../../data";

export default function Items(req, res) {
  res.status(200).json(items);
}
