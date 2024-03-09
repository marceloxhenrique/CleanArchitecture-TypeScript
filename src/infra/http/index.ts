import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../application/create-route.use-case";
import { RouteInMemoryRepository } from "../db/route-in-memory.repository";
import { ListeAllRoutes } from "../../application/list-all-routes.use-case";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const routeRepo = new RouteInMemoryRepository();

app.post("/routes", async (req: Request, res: Response) => {
  const createUsecase = new CreateRouteUseCase(routeRepo);
  const output = await createUsecase.execute(req.body);
  res.status(201).json(output);
});

app.get("/routes", async (_req: Request, res: Response) => {
  const listeAll = new ListeAllRoutes(routeRepo);
  const output = await listeAll.execute();
  res.json(output);
});

app.listen(port, () => {
  try {
    console.log(`Server listening in port ${port}`);
  } catch (error) {
    console.log(`Somehting went wrong error: ${error}`);
  }
});
