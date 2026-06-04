import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug,{ title, content, featureImage, status }) {
    try{
        return await this.databases.updateDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featureImage,
                status,

            }
        )

    } catch(error){
        console.log("Appwrite service :: updatePost :: error", error);
    }

  }

  async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;

    } catch(error){
        console.log("Appwrite service :: deletePost :: error", error);
    }

  }
}

const service = new Service();

export default service;
