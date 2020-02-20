import { Application, Request, Response } from "express";

export class UserRoutes {
  public route(app: Application) {
    app.get("/user", (req: Request, res: Response) => {
      res.json("Get is working");
    });

    app.post("/user", (req: Request, res: Response) => {
      res.json("Post is WORKING");
    });
  }
}
